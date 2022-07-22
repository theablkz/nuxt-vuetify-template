import {Provider} from '~/service/base'

function GetClients() {
  return Provider.get('https://support.netcore.kz/api/support-app/tasks?token=7botEeus5zHfoj50YHdZn1iRPfR4&statusId=5,6,7&categoryId=0&dateFrom=2022-06-22&dateTo=2022-07-22&service=null')
}


export {
  GetClients
}
