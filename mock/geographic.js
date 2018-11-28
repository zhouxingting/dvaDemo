import province from './geographic/province.json';

function getProvince(req, res) {
  return res.json(province);
}

export default {
  'GET /api/geographic/province': getProvince,
};
