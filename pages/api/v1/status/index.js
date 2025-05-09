function status(request, response) {
  response.status(200).json({ msg: "Hello, API!" });
}

export default status;
