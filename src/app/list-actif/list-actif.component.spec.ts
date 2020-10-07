/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListActifComponent } from './list-actif.component';

describe('ListActifComponent', () => {
  let component: ListActifComponent;
  let fixture: ComponentFixture<ListActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
