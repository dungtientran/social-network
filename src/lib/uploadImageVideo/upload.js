export const uploadImage = async(files) => {
    let err;
    let imageArr = [];
    await files.forEach(file => {
        if (!file) return err = 'Lỗi ảnh';
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') return 'Sai định dạng ảnh';
        const urlImg = URL.createObjectURL(file)
        return imageArr.push(urlImg)
    })
    return imageArr
    
}