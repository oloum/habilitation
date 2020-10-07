/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListHabilitationComponent } from './list-habilitation.component';

describe('ListHabilitationComponent', () => {
  let component: ListHabilitationComponent;
  let fixture: ComponentFixture<ListHabilitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHabilitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
