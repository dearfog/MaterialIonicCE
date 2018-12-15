import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadingComponent } from './downloading.component';

describe('DownloadingComponent', () => {
  let component: DownloadingComponent;
  let fixture: ComponentFixture<DownloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
