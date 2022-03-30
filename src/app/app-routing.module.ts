import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/posts/add-post/add-post.component';
import { MyPostComponent } from './pages/posts/my-post/my-post.component';
import { AllUsersComponent } from './pages/user/all-users/all-users.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleUserComponent } from './pages/user/single-user/single-user.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "user", children: [
    {path:"register", component: RegisterComponent},
    {path:"profile", component: ProfileComponent},
    {path:"all", component: AllUsersComponent},
    {path:"all/:id", component: SingleUserComponent},
    {path: "all/:id", component: EditProfileComponent}
  ]},

  {path:"post", children: [
    {path: "add", component: AddPostComponent},
    {path: "myPosts", component: MyPostComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
