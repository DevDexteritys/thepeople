import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaneBlockComponent } from './dotane-block.component';

describe('DotaneBlockComponent', () => {
  let component: DotaneBlockComponent;
  let fixture: ComponentFixture<DotaneBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotaneBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaneBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
