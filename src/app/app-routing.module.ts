import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ArtisanlistComponent } from './pages/artisanlist/artisanlist.component';
import { StafflistComponent } from './pages/stafflist/stafflist.component';
import { RequestComponent } from './pages/request/request.component';
import { TechnicianComponent } from './pages/technician/technician.component';
import { StatusComponent } from './pages/status/status.component';
import { StaffDashboardComponent } from './pages/staff-dashboard/staff-dashboard.component';
import { StaffrequestComponent } from './pages/staffrequest/staffrequest.component';
import { ArtfeedbackComponent } from './pages/artfeedback/artfeedback.component';
import { ArtreportComponent } from './pages/artreport/artreport.component';
import { AdminreportComponent } from './pages/adminreportdetailed/adminreport.component';
import { AdminRepoLinksComponent } from './pages/admin-repo-links/admin-repo-links.component';
import { GeneralreportComponent } from './pages/generalreportadmin/generalreport.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'stafflist',component: StafflistComponent},
  {path: 'artisanlist', component: ArtisanlistComponent},
  {path: 'request', component: RequestComponent},
  {path: 'technician', component: TechnicianComponent},
  // {path: 'technician/:id', component: TechnicianComponent},
  {path: 'status', component: StatusComponent},
  {path: 'status/:id', component: StatusComponent},
  {path: 'staff-dashboard', component: StaffDashboardComponent},
  {path: 'staff-request', component: StaffrequestComponent},
  {path: 'artfeedback', component: ArtfeedbackComponent},
  {path: 'artreport', component: ArtreportComponent},
  {path: 'adminreport', component: AdminreportComponent},
  {path : 'admin-repo-links', component: AdminRepoLinksComponent},
  {path: 'generalreport', component: GeneralreportComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
