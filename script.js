// 설정 값 가져옴
import { API_URL, API_KEY } from './env.js'

// supabase 객체에서 createClient 함수 가져옴
var { createClient } = supabase

// supabase 인스턴스 생성
supabase = createClient(API_URL, API_KEY)

// 파라미터: lat, lon (GPS 좌표)
// 리턴 값: Place ID
async function addPlace(lat, lon) {}

// 파라미터: placeId, value (장소 이름), language (언어)
// 리턴 값 없음
async function addPlaceName(placeId, value, language) {}

// 파라미터: placeId, value (장소 설명), language (언어)
// 리턴 값 없음
async function addPlaceDescription(placeId, value, language) {
    const { data, error } =  await supabase
  .from('test_place_description')
  .insert([
    {place_id: placeId, description: value, language: language}
  ])
}

// 파라미터: placeId
// 리턴 값 없음
async function addPlacePhoto(placeId) {
  const fileFirst = document.getElementById('photo_1').files[0]

  const { data: fileFirstData } = await supabase
    .storage
    .from('place.photo')
    .upload('test/' + placeId + '/1.jpg', fileFirst, {
      cacheControl: '3600',
      upsert: false
  })
  const fileSecond = document.getElementById('photo_2').files[0]

  const { data: fileSecondData } = await supabase
    .storage
    .from('place.photo')
    .upload('test/' + placeId + '/1.jpg', fileSecond, {
      cacheControl: '3600',
      upsert: false
  })
  const fileThird = document.getElementById('photo_3').files[0]

  const { data: fileThirdData } = await supabase
    .storage
    .from('place.photo')
    .upload('test/' + placeId + '/3.jpg', fileThird, {
      cacheControl: '3600',
      upsert: false
  })

  const BASE_PHOTO_URL = "https://wgdsxgtlkwalppytthaf.supabase.in/storage/v1/object/public/place.photo"

  const { data, error } = await supabase
    .from('test_place_photo')
    .insert([
      { place_id: placeId, photo_url: BASE_PHOTO_URL + '/test/' + placeId + '/1.jpg' },
      { place_id: placeId, photo_url: BASE_PHOTO_URL + '/test/' + placeId + '/2.jpg' },
      { place_id: placeId, photo_url: BASE_PHOTO_URL + '/test/' + placeId + '/3.jpg' }
    ])
}

// 파라미터 없음
// 리턴 값 없음
// 버튼이 클릭되면 실행되는 함수입니다. 위 함수 4개를 적절하게 실행하기
async function handleSubmit() {}

// content-submit id를 가진 엘리먼트를 가져와서
var buttonElement = document.getElementById('content-submit')

// 엘리먼트가 클릭됐을 때 handleSubmit 함수가 실행되게 함
buttonElement.addEventListener('click', handleSubmit)
