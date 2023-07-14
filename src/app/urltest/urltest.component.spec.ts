import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrltestComponent } from './urltest.component';

describe('UrltestComponent', () => {
  let component: UrltestComponent;
  let fixture: ComponentFixture<UrltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrltestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
