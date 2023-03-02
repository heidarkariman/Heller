import { Component,OnInit } from '@angular/core';
import { JsonreaderService } from '../jsonreader.service';
import { ToolUsageModel } from '../tool-usage-model.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tools-usage-table',
  templateUrl: './tools-usage-table.component.html',
  styleUrls: ['./tools-usage-table.component.scss'],
})
export class ToolsUsageTableComponent implements OnInit  {
  toolUsage: MatTableDataSource<ToolUsageModel>;
  displayedColumns: string[] = ['tool_id', 'count', 'time', 'first', 'last', 'cposmin', 'cposmax', 'uposmin', 'uposmax'];
  toolUsageData: any[];
  sort:string = 'tool_id';

  constructor(private JsonreaderService: JsonreaderService) { 
    this.toolUsage = new MatTableDataSource<ToolUsageModel>;
    this.toolUsageData =[];
    this.JsonreaderService.getToolUsage().subscribe((data: ToolUsageModel[]) => {
      this.toolUsage = new MatTableDataSource<ToolUsageModel>(data);
      this.toolUsageData = this.toolUsage.data; 
    });
  }
   ngOnInit() {
    this.toolUsage.sort = this.sort;
     }
    
}
