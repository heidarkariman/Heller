import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsUsageTableComponent } from './tools-usage-table.component';

describe('ToolsUsageTableComponent', () => {
  let component: ToolsUsageTableComponent;
  let fixture: ComponentFixture<ToolsUsageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsUsageTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsUsageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
