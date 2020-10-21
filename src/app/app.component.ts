import {
  Component,
  ComponentFactoryResolver,
  ViewChild
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // modal: boolean = false;

  @ViewChild(RefDirective, { static: false }) refDir: RefDirective;

  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta

  ){
    const t = title.getTitle();
    title.setTitle('HELOOOOOOOOOO!');

    this.meta.addTags([
      {name: 'Keywords', content: 'angular,google,appcomponents'},
      {name: 'description', content: 'this is app component'},
    ]);
  };

  showModal(){
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();
    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = 'HELLO';
    component.instance.close.subscribe( () => {
      this.refDir.containerRef.clear();
    });
  };

}

