import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageSingleComponent } from './portfolio-page-single.component';

describe('PortfolioPageSingleComponent', () => {
  let component: PortfolioPageSingleComponent;
  let fixture: ComponentFixture<PortfolioPageSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioPageSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
