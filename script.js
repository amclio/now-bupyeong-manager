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
async function addPlaceDescription(placeId, value, language) {}

// 파라미터: placeId, file (사진 파일)
// 리턴 값 없음
async function addPlacePhoto(placeId, file) {}

// 파라미터 없음
// 리턴 값 없음
// 버튼이 클릭되면 실행되는 함수입니다. 위 함수 4개를 적절하게 실행하기
async function handleSubmit() {}

// content-submit id를 가진 엘리먼트를 가져와서
var buttonElement = document.getElementById('content-submit')

// 엘리먼트가 클릭됐을 때 handleSubmit 함수가 실행되게 함
buttonElement.addEventListener('click', handleSubmit)
