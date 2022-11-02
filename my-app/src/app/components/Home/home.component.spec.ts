import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { homeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';

describe('homeComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let component: homeComponent;
  let fixture: ComponentFixture<homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ homeComponent ],
      imports: [ HttpClientTestingModule ]
    })

    .compileComponents(
    );

    fixture = TestBed.createComponent(homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
