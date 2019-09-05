import React, { Component } from 'react';
import { Prompt, Redirect } from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: false,
      isRedirect: false,
      txtName: '',
      txtEmail: '',
      txtPhone: '',
      txtMessage: '',
      slCity: 'CT',
      rdioGT: 2
    }
  }
  isChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
      this.setState({
        isBlocking: event.target.value.length > 0,
        [name]: value 
      })
    }
    // Tại sao khi đặt ở this.state là txtName, txtEmail.... trùng tên với name="txtName",.. ở trong input
    // Thay vì this.setState({txtName: ....,}) cập nhật lại tên từ this.state thì 
    // khi gọi [name]: value thì name ở input là txtName nên trong dấu [] name ở đây là txtName trùng nhau okay !
  subMitForm = (event) => {
    const {txtName,txtPhone,txtEmail,txtMessage,slCity} = this.state;
    event.preventDefault();
    event.target.reset();
    this.setState({
      isBlocking: false, //false ở đây là để khi submit không bị sang trang khác
      isRedirect: false //true là để hiểu là true là sẽ redirect sang trang khác
    });
    let sexx = '';
    if(parseInt(this.state.rdioGT) === 1){
      sexx = 'Nam';
    }
    else sexx = 'Nữ';
    var content = '';
    content += ' Họ và Tên : ' + txtName;
    content += ' Email : ' + txtEmail;
    content += ' Phone : ' + txtPhone;
    content += ' Message : ' + txtMessage;
    content += ' Select : ' + slCity;
    content += ' Giới tính : ' + sexx;
    console.log(content);
  }

  render() {
    // let { from } = this.props.location.state || { from: { pathname: "/" } };
    // khi submit thì nó sẽ trả về trang mà bạn muốn 
    if (this.state.isRedirect){
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="mt-5">
        {/* đang điền form thì chuyển trang khác -> nó sẽ hỏi có chắc chuyển trang không ?  */}
        <Prompt
          when={this.state.isBlocking}
          message={location =>
            `Bạn có chắc muốn chuyển sang trang ${location.pathname} không?`
          }
        />
        <h1>Liên Hệ</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.841454343712!2d105.76842661411119!3d10.029938975271696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqEgLSBDYW4gdGhvIFVuaXZlcnNpdHk!5e0!3m2!1svi!2s!4v1567512691973!5m2!1svi!2s" width={550} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen ></iframe>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Contact</h2>
            <form method="POST" onSubmit={(event) => this.subMitForm(event)}>
              <div className="form-group">
                <input type="text"
                  name="txtName"
                  value={this.state.txtName}
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  onChange={(event) => this.isChange(event)}
                />
                <input type="email"
                  name="txtEmail"
                  value={this.state.txtEmail}
                  className="form-control my-2"
                  id="exampleFormControlInput1"
                  placeholder="E-mail"
                  onChange={(event) => this.isChange(event)}
                />
                <input type="text"
                  name="txtPhone"
                  value={this.state.txtPhone}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                  onChange={(event) => this.isChange(event)}
                />
              </div>
              <div className="form-group">
                <textarea className="form-control"
                  name="txtMessage"
                  defaultValue={this.state.txtMessage}
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Messange"
                  onChange={(event) => this.isChange(event)}
                />
              </div>
              <div className="form-group">
              <select className="form-control" name="slCity" value={this.state.slCity} onChange={(event) => this.isChange(event)} >
              <option value="">Vui lòng chọn thành phố</option>
              <option value="HCM">Hồ chí Minh</option>
              <option value="HN">Hà Nội</option>
              <option value="HP">Hải Phòng</option>
              <option value="CT">Cần Thơ</option>
              <option value="DN" defaultValue>Đà Nẵng</option>
            </select>
            </div>
            <div className="form-group">
            <label><input type="checkbox" className="custom-control-inline mr-1" name="chkSubject" value="PHP"/>PHP</label>
            <label className="ml-2"><input type="checkbox" className="custom-control-inline mr-1" name="chkSubject" value="Java"/>Java</label>
            <label className="ml-2"><input type="checkbox" className="custom-control-inline mr-1" name="chkSubject" value="C++"/>C++</label>
            <label className="ml-2"><input type="checkbox" className="custom-control-inline mr-1" name="chkSubject" value="JS"/>JS</label>
            </div>
            <div className="form-group">
            <label><input type="radio" 
            className="custom-control-inline mr-1" 
            name="rdioGT" value="1" 
            onChange={(event) => this.isChange(event)}
            checked={parseInt(this.state.rdioGT) === 1}
            />Nam</label>
            <label className="ml-2"><input type="radio" 
            className="custom-control-inline mr-1" 
            name="rdioGT" value="2" 
            onChange={(event) => this.isChange(event)}
            checked={parseInt(this.state.rdioGT) === 2}
            />Nữ</label>
            </div>
            <div className="form-group">
            <label><input type="file" className="custom-control-inline" id="file"/><span></span></label>
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;