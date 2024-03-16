async function myFetch(url, options) {
  try {
    const res = await fetch(url, options);
    // 通过res.ok鉴别HTTP状态的正常
    if (!res.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return res;
  } catch (error){
    console.error(error);
    throw error;
  }
}