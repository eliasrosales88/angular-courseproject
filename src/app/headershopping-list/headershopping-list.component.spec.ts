import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadershoppingListComponent } from './headershopping-list.component';

describe('HeadershoppingListComponent', () => {
  let component: HeadershoppingListComponent;
  let fixture: ComponentFixture<HeadershoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadershoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadershoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
