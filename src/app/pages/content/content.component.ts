import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.DU2kFlmqmx5aX6TUXqsyRgHaD3%26pid%3DApi&f=1&ipt=b267605625f837a06b79f52439fc5c75d5b19502dd0199e7348c104430f3dd02&ipo=images'
  contentTitle: string = 'Filhotes fofos';
  contentDescription: string = 'Esse filhote é muito fofo mano';
  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe(value => value.get("id"));
  }
}
