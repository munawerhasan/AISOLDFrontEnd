import {Component, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
    selector: '[appRemoveAlert]'
  })
  export class RemoveAlertDirective {
    alert_parent: any;
    constructor(private elements: ElementRef) {}
  
    @HostListener('click', ['$event'])
    onToggle($event: any) {
      $event.preventDefault();
      this.alert_parent = (this.elements).nativeElement.parentElement;
      this.alert_parent.remove();
    }
  }