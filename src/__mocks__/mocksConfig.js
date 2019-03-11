const MockResponses = require('./mockResponses')
beforeAll(async () => {

  const createResponse = (path, params, request) => {
    let response
    switch (path) {
      case 'sign_in':
        let user
        user = MockResponses.mockedUserResponses.find(user => {
          return user.headers.uid === JSON.parse(params).email
        })
        response = user || MockResponses.missingUserResponse
        return response
      case 'performance_data':
        if ((request.method()) === 'POST') {
          response = MockResponses.savingEntryResponse
        } else if ((request.method()) === 'GET') {
          response = MockResponses.performanceDataIndexResponse
        }
        return response
    }
  }

  const requests = {
    'sign_in': {},
    'performance_data': {}
  }

  await page.setRequestInterception(true);

  await page.on('request', interceptedRequest => {
    const requestedEndpoint = interceptedRequest.url().split("/").pop().split('?')[0];
    console.log("Making request to: " + requestedEndpoint)
    if (requests[requestedEndpoint]) {
      params = interceptedRequest.postData()
      interceptedRequest.respond(createResponse(requestedEndpoint, params, interceptedRequest));
    } else {
      interceptedRequest.continue();
    }
  })
})