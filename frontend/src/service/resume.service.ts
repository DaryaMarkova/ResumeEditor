import axios from "axios";

class ResumeService {
  API_URL = "http://localhost:3005";

  uploadFile(file: Blob): Promise<unknown> {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(`${this.API_URL}/upload`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }
}

export const resumeService = new ResumeService();
