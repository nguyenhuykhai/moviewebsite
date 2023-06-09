import React from "react";
import clsx from "clsx";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import ScrollToMiddle from '../../components/GlobalFunctions/ScrollToMiddle'

const cx = classNames.bind(styles);
export default function About() {
  return (
    <section className={styles.main}>
      <ScrollToMiddle />
      <div className={styles.firstScript}>
        <div className={styles.headline}>
          <h1 className={clsx(styles.title)}>Liên hệ</h1>
        </div>

        <div className={clsx(styles.container)}>
          <p className="text-center">
            Hoặc bạn hãy liên hệ ngay để bộ phận chăm sóc khách hàng tư vấn ngay
            cho bạn.
          </p>

          <div className={clsx(styles.textCenter)}>
            <div>
              <a href="#" className="btn">
                Gọi 0981.211.948
              </a>
            </div>
            <div>
              <a href="#" className="btn">
                Gọi 0979.853.348
              </a>
            </div>
          </div>
        </div>

        <div className={clsx(styles.formInput)}>
          <div className="form-group">
            <label for="Name">
              Tên đầy đủ
            </label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="Email">Tên Email</label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="PhoneNumber">
              Số điện thoại
            </label>
            <input className={clsx(styles.formControl)} />
            <span className="text-danger field-validation-valid"></span>
          </div>

          <div className="form-group">
            <label for="Content">
              Nội dung
            </label>
            <textarea className={clsx(styles.formTextArea)}></textarea>
            <span className="text-danger field-validation-valid"></span>
          </div>

          <button type="submit" className="btn btn-pink btn-submit">
            Gửi đi
          </button>
        </div>
      </div>

      <div className={styles.secondScript}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nha-trang-nature-elite.appspot.com/o/Images%20For%20Logo%20-%20Sliders%20-%20Other%2FLogo%20-%20Banner%20-%20Cover%20Image%2Fbackground.png?alt=media&token=1b455e43-a143-47d2-a864-0a71c76d08a8&_gl=1*1yc29x1*_ga*ODIxNzI4MDkuMTY4NDA3OTMxMQ..*_ga_CW55HF8NVT*MTY4NjI0OTE3OC4xNS4xLjE2ODYyNDkyMDUuMC4wLjA."
          alt=""
        />
      </div>
    </section>
  );
}
