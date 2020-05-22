import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharerecipeComponent } from './sharerecipe.component';

describe('SharerecipeComponent', () => {
  let component: SharerecipeComponent;
  let fixture: ComponentFixture<SharerecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharerecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharerecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
