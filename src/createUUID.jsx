function getOrCreateUUID(){
  let uuid = localStorage.getItem('ID');

    if (!uuid) {
        uuid = crypto.randomUUID(); // 또는 다른 UUID 생성 방식
        localStorage.setItem('ID', uuid);
    }
    return uuid;
}

export default getOrCreateUUID;
