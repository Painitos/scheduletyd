import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdbComponent } from './testdb.component';


describe('TestdbComponent', () => {
  let component: TestdbComponent;
  let fixture: ComponentFixture<TestdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestdbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
