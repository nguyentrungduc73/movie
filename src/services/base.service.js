import http from "./services";

class BaseService {
  name = "";

  constructor(name) {
    this.name = name;
  }

  GetAllMovie() {
    return http.get(`/api/collections/${this.name}/records`);
  }

  searchByCategory(filter, expand) {
    return http.get(`/api/collections/${this.name}/records`, {
      params: {
        filter: filter,
        expand: expand,
      },
    });
  }
  searchByName(filter) {
    return http.get(`/api/collections/${this.name}/records`, {
      params: {
        filter: filter,
      },
    });
  }

  read(id, expand) {
    return http.get(`/api/collections/${this.name}/records/${id}`, {
      params: {
        expand: expand,
      },
    });
  }

  create(data) {
    return http.post(`/api/collections/${this.name}/records`, data);
  }

  update(id) {
    return http.patch(`/api/collections/${this.name}/records/${id}`);
  }

  delete(id) {
    return http.delete(`/api/collections/${this.name}/records/${id}`);
  }
}

export default BaseService;
