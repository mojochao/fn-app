import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CigarView from 'views/CigarView/CigarView'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import LoginView from 'views/LoginView/LoginView'
import NotFoundView from 'views/NotFoundView/NotFoundView'
import RegisterView from 'views/RegisterView/RegisterView'
import ProfileView from 'views/ProfileView/ProfileView'
import SmokeView from 'views/SmokeView/SmokeView'
import StashView from 'views/StashView/StashView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='profile' component={ProfileView} />
    <Route path='login' component={LoginView} />
    <Route path='register' component={RegisterView} />
    <Route path='cigar/:id' component={CigarView} />
    <Route path='smoke/:id' component={SmokeView} />
    <Route path='stash/:id' component={StashView} />
    <Route path='404' component={NotFoundView} />
    <Redirect from='*' to='404' />
  </Route>
)
