import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com/';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
    const [githubUser,setGithubUser] = useState(mockUser);
    const [repos,setRepos] = useState(mockRepos);
    const [followers,setFollowers] = useState(mockFollowers);
    // requests & loading
    const [requests,setRequests] = useState(0);
    const [loading,setLoading] = useState(false);
    // error 
    const [error,setError] = useState({show:false,msg:''});
    // check rate
    const checkRequests = async () => {
        const url = `${rootUrl}rate_limit`;
        const res = await axios(url);
        const {data} = res;
        const {rate:{remaining}} = data;
        setRequests(remaining);
        if(remaining === 0){
            // show an error
            toggleError(true,'you have exeeded your hourly limit');
        }
    }
    const searchGithubUser = async (user) => {
        setLoading(true);
        toggleError();
        let url = `${rootUrl}users/${user}`;
        let res = await axios(url)
        .catch(error => console.log(error));
        if(res){
            const{data} = res;
            setGithubUser(data);
            const {login,followers_url} = data;
            const url_repos = `${rootUrl}users/${login}/repos?per_page=100`;
            const url_followers = `${followers_url}?per_page=100`;
            await Promise.allSettled([axios(url_repos),
                axios(url_followers)]).then(results => {
                    const [repos,followers] = results;
                    const status = 'fulfilled' ;
                    if(repos.status === status){
                        setRepos(repos.value.data);
                    }
                    if(followers.status === status){
                        setFollowers(followers.value.data);
                    }
                }).catch(err => console.log(err));
        }
        else{
            toggleError(true,'no such user');
        }
        checkRequests();
        setLoading(false);
    }
    function toggleError(show = false,msg = ''){
        setError(() => {
            return {show,msg};
        });
    }
    //error
    useEffect(() => {checkRequests()},[]);
    return(
    <GithubContext.Provider value={
        {
            githubUser,
            repos,
            followers,
            requests,
            toggleError,
            error,
            searchGithubUser,
            loading
        }
    }>
        {children}
    </GithubContext.Provider>
    );
}
// const useGlobalContext = () => {
//     return useContext(GithubContext);
// }

export {GithubProvider,GithubContext};