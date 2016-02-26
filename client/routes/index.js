import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'

import CigarsActivityView from 'views/CigarsActivityView/CigarsActivityView'
import HeatmapActivityView from 'views/HeatmapActivityView/HeatmapActivityView'
import HistoryView from 'views/HistoryView/HistoryView'
import HomeView from 'views/HomeView/HomeView'
import LightupView from 'views/LightupView/LightupView'
import LoginView from 'views/LoginView/LoginView'
import NotFoundView from 'views/NotFoundView/NotFoundView'
import ProfileView from 'views/ProfileView/ProfileView'
import RegisterView from 'views/RegisterView/RegisterView'
import SmokeView from 'views/SmokeView/SmokeView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='cigars' component={CigarsActivityView} />
    <Route path='heatmap' component={HeatmapActivityView} />
    <Route path='history' component={HistoryView} />
    <Route path='lightup' component={LightupView} />
    <Route path='login' component={LoginView} />
    <Route path='profile' component={ProfileView} />
    <Route path='register' component={RegisterView} />
    <Route path='smoke/:id' component={SmokeView} />
    <Route path='404' component={NotFoundView} />
    <Redirect from='*' to='404' />
  </Route>
)
