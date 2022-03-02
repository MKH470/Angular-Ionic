import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-loading-controller',
  templateUrl: './loading-controller.page.html',
  styleUrls: ['./loading-controller.page.scss'],
})
export class LoadingControllerPage implements OnInit {
  posts: Post[] = [];
  constructor(
    private postsService: PostsService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  async loadingPosts() {
    const loading = await this.loadingCtrl.create({
      message: 'please wait ...',
      spinner: 'bubbles',
      cssClass: 'costome-spinner',
    });
    await loading.present();
    setTimeout(() => {
      const postsAll = this.posts;
      loading.dismiss(postsAll);
      console.log(postsAll);
      return postsAll;
    }, 5000);
  }
}
