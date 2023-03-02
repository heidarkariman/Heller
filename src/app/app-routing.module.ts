import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsUsageTableComponent } from './tools-usage-table/tools-usage-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/toolsusagetable', pathMatch: 'full' },
  { path: 'toolsusagetable', component: ToolsUsageTableComponent },
  { path: 'data', redirectTo: './assets/tool-usage.json' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
