import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  selectedFile: File | null = null;
  profileImage: string = "";

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    event.preventDefault();
    this.selectedFile = event.target.files[0];
    console.log("Selected File:", this.selectedFile);
  }

  uploadFile() {
    
  if (!this.selectedFile) return;
    console.log("Uploading File:", this.selectedFile);
  const body = {
    fileName: this.selectedFile.name,
    contentType: this.selectedFile.type
  };

  // Step 1: Ask backend for pre-signed URL via POST
  this.http.post('http://localhost:8080/api/profile/upload', body, { responseType: 'text' })
    .subscribe((presignedUrl) => {
      console.log("Presigned URL:", presignedUrl);

      // Step 2: Upload directly to S3
    //   fetch(presignedUrl, {
    //     method: 'PUT',
    //     body: this.selectedFile,
    //     headers: {
    //       'Content-Type': ""
    //     }
    //   }).then(() => {
    //     alert("Upload successful!");
    //   }).catch(err => console.error("Upload failed", err));
    });
}


}
