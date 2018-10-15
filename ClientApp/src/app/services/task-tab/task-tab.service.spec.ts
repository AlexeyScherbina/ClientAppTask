import { TestBed, inject } from '@angular/core/testing';

import { TaskTabService } from './task-tab.service';

describe('TaskTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskTabService]
    });
  });

  it('should be created', inject([TaskTabService], (service: TaskTabService) => {
    expect(service).toBeTruthy();
  }));
});
