import axios from "axios";

class SignService {
  action1 = () =>
    axios({
      url: "http://localhost:8000/api/ca/sign-xml/111660364373410324602044888586771781661",
      method: "POST",
      data: {
        xml_url:
          "https://res.cloudinary.com/vianey/raw/upload/v1638261951/ca/drivers_tzdixv.xml",
      },
    });

    action2 = () =>
    axios({
      url: "http://127.0.0.1:8000/api/ca/sign-xml/111660364373410324602044888586771781661",
      method: "POST",
      data: {
        "xml_url": "https://res.cloudinary.com/vianey/raw/upload/v1638261951/ca/drivers_tzdixv.xml"
    }
    });
}

const signService = new SignService();

export default signService;
