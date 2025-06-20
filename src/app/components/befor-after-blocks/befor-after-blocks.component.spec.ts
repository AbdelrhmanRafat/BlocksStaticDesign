import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforAfterBlocksComponent } from './befor-after-blocks.component';

describe('BeforAfterBlocksComponent', () => {
  let component: BeforAfterBlocksComponent;
  let fixture: ComponentFixture<BeforAfterBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforAfterBlocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeforAfterBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
