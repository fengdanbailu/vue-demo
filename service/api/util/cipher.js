/*
 * @Author: gm.chen
 * @Date: 2021-04-21 22:00:18
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-04-22 07:32:01
 * @Description: file content
 * @FilePath: /vue-demo/service/api/util/cipher.js
 */
const crypto = require('crypto')
const constants = require('constants')
const fs = require('fs')

function cipherivEncrypt(data, algorithm, key, iv) {
  const cipheriv = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipheriv.update(data, 'utf8', 'hex')
  encrypted += cipheriv.final('hex')
  return encrypted
}

function cipherivDecrypt(data, algorithm, key, iv) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

function publicEncrypt(data, publicKey, inputEncoding, outputEncoding, padding) {
  const encryptText = crypto.publicEncrypt({
    key: publicKey,
    padding: padding || constants.RSA_PKCS1_PADDING
  }, Buffer.from(data, inputEncoding))

  return encryptText.toString(outputEncoding)
}

function publicDecrypt(data, publicKey, inputEncoding, outputEncoding, padding) {
  const decryptText = crypto.publicDecrypt({
    key: publicKey,
    padding: padding || constants.RSA_PKCS1_PADDING
  }, Buffer.from(data, inputEncoding))

  return decryptText.toString(outputEncoding)
}

function privateEncrypt(data, privateKey, inputEncoding, outputEncoding, padding) {
  const encryptText = crypto.privateEncrypt({
    key: privateKey,
    padding: padding || constants.RSA_PKCS1_PADDING
  }, Buffer.from(data, inputEncoding))

  return encryptText.toString(outputEncoding)
}
function privateDecrypt(data, privateKey, inputEncoding, outputEncoding, padding) {
  const decryptText = crypto.privateDecrypt({
    key: privateKey,
    padding: padding || constants.RSA_PKCS1_PADDING
  }, Buffer.from(data, inputEncoding))
  return decryptText.toString(outputEncoding)
}

function md5(data) {
  const hash = crypto.createHash('md5')
  return hash.update(data).digest('hex')
}

function sha256(data) {
  const hash = crypto.createHash('sha256')
  return hash.update(data).digest('hex')
}

const encrypt = function() {

}
const decrypt = function() {

}
const test = function() {
  const password = '1qaz@WSX3edc'
  console.log('password=' + password)
  // aes-128-cbc 密钥长度16，向量长度16
  // aes-192-cbc 密钥长度24，向量长度16
  // aes-256-cbc 密钥长度32，向量长度16
  // des-128-cbc 密钥长度8，向量长度8
  // des-192-cbc 密钥长度8，向量长度8
  // des-256-cbc 密钥长度8，向量长度8
  // 加密模式ecb(只需要密钥)，cbc,ctr,ocf,cfb

  const key = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' // 24
  const iv = 'aaaaaaaaaaaaaaaa' // 16
  const security = cipherivEncrypt(password, 'aes-256-cbc', key, iv)
  console.log('security=' + security)
  const result = cipherivDecrypt(security, 'aes-256-cbc', key, iv)
  console.log('result=' + result)

  // 生成公钥私钥的方法
  // openssl
  // genrsa -out rsa_private_key.pem 1024
  // rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem

  const rsaPrivateKey = fs.readFileSync('./rsa_private_key.pem')
  const rsaPublicKey = fs.readFileSync('./rsa_public_key.pem')

  const cipherText = publicEncrypt(password, rsaPublicKey, 'utf8', 'hex') // 公钥加密
  console.log('cipherText=' + cipherText)
  const decryptText = privateDecrypt(cipherText, rsaPrivateKey, 'hex', 'utf8') // 私钥解密
  console.log('decryptText=' + decryptText)

  const cipherTextPrivate = privateEncrypt(password, rsaPrivateKey, 'utf8', 'hex') // 私钥加密
  console.log('cipherTextPrivate=' + cipherTextPrivate)
  const decryptTextPublic = publicDecrypt(cipherTextPrivate, rsaPublicKey, 'hex', 'utf8') // 公钥解密
  console.log('decryptTextPublic=' + decryptTextPublic)
}
test()

// module.exports = { encrypt, decrypt }
