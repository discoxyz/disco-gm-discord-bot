class DiscoClient {
  async issueCredential (schemaUrl, did, subjectData) {
      const apiKey = process.env.DISCO_API_KEY;  
      const requestUrl = 'https://api.disco.xyz/v1/credential';

      const requestBody = JSON.stringify({
        "schemaUrl": schemaUrl,
        "recipientDID": did,
        "subjectData": subjectData
      });
    
      try {
        console.log("posting...");
        const response = await fetch(requestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: requestBody,
        });
    
        if (!response.ok) {
          throw new Error('Failed to issue credential');
        }
    
        const credential = await response.json();
        console.log('Issued credential:', credential);

        return credential;
      } catch (error) {
        console.error('Failed to issue credential:', error);
        throw error;
      }
  };

  async lookupDiscord (handle) {
    const apiKey = process.env.DISCO_API_KEY;  
    //might need to split out #
    const requestUrl = `https://api.disco.xyz/v1/search/?handle=${handle}`;
 
    try {
      console.log("getting did from discord..");
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        }
      });

      let dids = [];

      if (response.status === 404) {
        dids = [];
      } else {
        dids = await response.json();
      }
      
      console.log('List of DIDs', dids);

      return dids;
    } catch (error) {
      console.error('Failed to find user with the discord handle:', error);

      //handle error where discord user not found - prompt user to  try agian or something.
      throw error;
    }
  };
}

export default DiscoClient;
