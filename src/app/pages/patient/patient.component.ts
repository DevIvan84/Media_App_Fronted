import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../model/Patient';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialModule } from '../../material/material.module';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MaterialModule, RouterLink,RouterOutlet],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

  //patients: Patient[];
  dataSource: MatTableDataSource<Patient>;
  displayedColumns: string[] = ['idPatient','firstName','lastName','dni','actions'];

  constructor( private patientService : PatientService){

  }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
