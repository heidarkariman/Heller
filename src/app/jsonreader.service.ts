import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToolUsageModel } from './tool-usage-model.model';

@Injectable({
  providedIn: 'root'
})
export class JsonreaderService {
  private toolUsageUrl = 'assets/tool-usage.json';

  constructor(private http: HttpClient) { }


  getToolUsage(): Observable<ToolUsageModel[]> {
    return this.http.get<ToolUsageModel[]>(this.toolUsageUrl);
  }
}
