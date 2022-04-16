import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaseemComponent } from './waseem.component';

describe('WaseemComponent', () => {
  let component: WaseemComponent;
  let fixture: ComponentFixture<WaseemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaseemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaseemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
