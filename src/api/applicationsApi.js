class ApplicationsApi {
  static getAllApplications() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("http://localhost:8123/getallapplications", {
          headers: {
            CHECKPOINTID: "let-me-pass",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resolve(Object.assign([], data.Applications));
          })
          .catch((error) => {
            resolve(
              Object.assign([], [{ code: 100, desc: "error", apps: [] }])
            );
          });
      }, 3000);
    });
  }

  static addApplication(props) {
    const { appName, appKey } = props;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch("http://localhost:8123/addnewapplication", {
          method: "PUT",
          headers: {
            CHECKPOINTID: "let-me-pass",
          },
          body: JSON.stringify({ app_name: appName, app_key: appKey }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            resolve(Object.assign({}, data));
          })
          .catch((error) => {
            resolve(
              Object.assign([], [{ code: 100, desc: "error", data: {} }])
            );
          });
      }, 3000);
    });
  }
}

export default ApplicationsApi;
