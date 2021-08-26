import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistionavyPageComponent } from './distionavy-page.component';

describe('DistionavyPageComponent', () => {
  let component: DistionavyPageComponent;
  let fixture: ComponentFixture<DistionavyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistionavyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistionavyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
