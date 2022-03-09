import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menuItems = [
    {
      name: 'services',
      icon: 'rocket-outline',
      url: '/tabs/services',
    },
    {
      name: 'about',
      icon: 'heart-outline',
      url: '/tabs/about',
    },
    {
      name: 'contacts',
      icon: 'chatbubble-ellipses-outline',
      url: '/tabs/contacts',
    },
    {
      name: 'opdrachten',
      icon: 'chatbubble-ellipses-outline',
      url: '/opdrachten',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
