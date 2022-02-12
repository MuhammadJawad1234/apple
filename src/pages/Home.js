import React from "react";
import { Grid } from "@mui/material";
// import { color, fontWeight } from "@mui/system";

const Home = () => {
  return (
    <>
      <Grid container style={{ background: "#f5f5f7" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>
            <a href="#" style={{}}>
              Shop online
            </a>
            and get Specialist help, free delivery, and more. Some of our stores
            are offering limited services. Before you visit, please check your
            <a href="#" style={{}}>
              store’s services.
            </a>
          </p>
        </Grid>
      </Grid>
      <Grid container style={{ background: "#f5f5f7" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>
            Save 5% on Apple products with a new Apple Card through January 31.
            Only at Apple. Exclusions and terms apply.
            <a href="#" style={{}}>
              Learn more
            </a>
          </p>
        </Grid>
      </Grid>
      <Grid container style={{ background: "#fbfbfd" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 style={{ fontSize: "56px", fontWeight: "600" }}>iPhone 13 Pro</h1>
          <h1 style={{ fontSize: "27px", fontWeight: "400" }}>
            {" "}
            Oh. So. Pro.{" "}
          </h1>
          <p>
            {" "}
            <a href="#" style={{ padding: "20px" }}>
              Learn more
            </a>{" "}
            <a href="#">Buy</a>
          </p>{" "}
          <img src="images/1.jpg" />
        </Grid>
      </Grid>{" "}
      <br></br>
      <Grid container style={{ background: "#34283c", color: "white" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 style={{ paddingTop: "10px", fontSize: "60px" }}>iPhone 13</h1>
          <h1 style={{ color: "pink", fontWeight: "400" }}>
            {" "}
            Your new superpower.{" "}
          </h1>
          <p>
            {" "}
            <a href="#" style={{ color: "blue", fontSize: "25px" }}>
              Learn more
            </a>{" "}
            <a href="#" style={{ color: "blue", fontSize: "25px" }}>
              Buy
            </a>
          </p>{" "}
          <img src="images/3.PNG" />
        </Grid>
      </Grid>
      <br></br>
      <Grid container style={{ background: "#F5F5F7" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h4 style={{ fontSize: "22px", fontWeight: "400", color: "#bf4800" }}>
            New
          </h4>
          <img src="images/4.png" />
          <h1 style={{ fontWeight: "400" }}>
            Intorducing our largest display yet.
          </h1>
          <p>
            <a href="#" style={{ color: "blue", fontSize: "25px" }}>
              Learn more
            </a>
            <a href="#" style={{ color: "blue", fontSize: "25px" }}>
              Buy
            </a>
          </p>
          <img src="images/5.jpg" />
          <br></br>
        </Grid>
      </Grid>{" "}
      <br></br>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ background: "#F2F2F4" }}
        >
          <img
            src="images/6.png"
            style={{ marginTop: "40px", lineHeight: "0px" }}
          />
          <h2
            style={{ fontSize: "25px", fontWeight: "400", lineHeight: "0px" }}
          >
            More way to move. Now with
          </h2>
          <h2
            style={{ fontSize: "25px", fontWeight: "400", lineHeight: "5px" }}
          >
            Time to Run and Collections.
          </h2>
          <a href="#" style={{ color: "blue", fontSize: "25px" }}>
            Learn more
          </a>
          <a href="#" style={{ color: "blue", fontSize: "25px" }}>
            Buy
          </a>
          <img src="images/7.jpg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ background: "#FFFFFF" }}
        >
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "500",
              lineHeight: "10px",
              paddingTop: "40px",
            }}
          >
            MackBook Pro
          </h1>
          <h1
            style={{ fontSize: "25px", fontWeight: "400", lineHeight: "5px" }}
          >
            Supercharged for pros.
          </h1>
          <a href="#" style={{ color: "blue", fontSize: "25px" }}>
            Learn more
          </a>
          <a href="#" style={{ color: "blue", fontSize: "25px" }}>
            Buy
          </a>
          <img src="images/8.jpg" style={{ marginTop: "80px" }} />
        </Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            background: "#F8F1F8",
            color: "#602d62",
            paddingTop: "50px",
          }}
        >
          <h1 style={{ lineHeight: "10px" }}> Valentine's Day </h1>
          <h1>
            Say it with a <br></br> gift from Apple.
          </h1>
          <img src="images/9.jpg" style={{ width: "840px", height: "600px" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src="images/10.jpg"
            style={{ width: "840px", height: "830px" }}
          ></img>
        </Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ background: "#fff" }}>
          <img src="images/11.png"></img>
          <h1 style={{ fontSize: "30px", fontWeight: "400" }}>
            Save 5% on Apple products with a new <br></br> Apple Card through
            January 31.
          </h1>
          <p style={{ fontSize: "25px", color: "gray" }}>
            Only at Apple. Exclusions and terms apply.
          </p>
          <img
            src="images/12.jpg"
            style={{ height: "400px", width: "850px" }}
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ background: "#fff" }}>
          <img src="images/13.png"></img>
          <h1 style={{ fontSize: "30px", fontWeight: "400" }}>
            Nickelodeon Extreme Tennis. Play Now.
          </h1>
          <img
            src="images/14.jpg"
            style={{ height: "500px", width: "800px" }}
          ></img>
        </Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          style={{ background: "#F5F5F7" }}
        >
          <p
            style={{ textAlign: "justify", color: "gray", paddingTop: "30px" }}
          >
            <strong>
              1. The following purchases with Apple Card are ineligible to earn
              5% back: monthly financing through Apple Card Monthly
              Installments, Apple iPhone Payments, the iPhone Upgrade Program,
              and wireless carrier financing plans;
            </strong>
            Apple Media Services; AppleCare+ monthly payments. Subject to credit
            approval. Valid only on qualifying purchases in U.S. for new Apple
            Card customers who open an account and use it from 12/26/21 to
            1/31/22 at Apple Store locations, apple.com, the Apple Store App, or
            by calling 1-800-MY-APPLE. Accounts opened before 12/26/21 or after
            1/31/22 do not qualify. New Apple Card users added to an Apple Card
            Family account opened during offer period can earn 5% back on their
            own purchases. Not valid for existing Apple Card users who merge
            their Apple Card accounts to become Co-Owners. 5% is total amount of
            Daily Cash that can be earned for qualifying Apple purchases using
            Apple Card. Returning qualified items that were purchased during
            offer period may impact your cash back. 5% savings is earned as
            Daily Cash and transferred to your Apple Cash card when transactions
            post to your Apple Card account. If you do not have an Apple Cash
            card, Daily Cash can be applied by you as a credit on your statement
            balance. See the Apple Card Customer Agreement for more details on
            Daily Cash and qualifying transactions. Changes to your account
            status during offer period may delay the fulfillment of your Daily
            Cash bonus.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            2. $9.99/month after trial. Offer good for 3 months after eligible
            device activation. One subscription per Family Sharing group. Plan
            automatically renews until cancelled. Restrictions and other terms
            apply.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            3. $4.99/month after free trial. One subscription per Family Sharing
            group. Offer good for 3 months after eligible device activation.
            Plan automatically renews until canceled. Restrictions and other
            terms apply.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings General
            Software Update. Tap Download and Install.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            Available for qualifying applicants in the United States.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            A subscription is required for Apple Fitness+.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            Apple Fitness+ requires iOS 14.3 or later, iPadOS 14.3 or later,
            watchOS 7.2 or later, and tvOS 14.3 or later.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            To get the newest features, use Apple Fitness+ with Apple Watch
            Series 3 or later with watchOS 8 paired with iPhone 6s or later with
            iOS 15 or later; iPad with iPadOS 15 or later; and Apple TV 4K or
            Apple TV HD with tvOS 15 or later.
          </p>
          <p style={{ textAlign: "justify", color: "gray" }}>
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other terms apply.
          </p>
          <hr></hr>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1.6}
          lg={1.6}
          style={{ background: "#F5F5F7" }}
        >
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            Shop and Learn
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Store <br></br> Mac <br></br> iPad <br></br> iPhone <br></br> Watch{" "}
            <br></br> AirPods <br></br> TV & Home <br></br> iPod touch <br></br>{" "}
            AirTag <br></br> Accessories <br></br> Gift Cards
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1.6}
          lg={1.6}
          style={{ background: "#F5F5F7" }}
        >
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            Services
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Apple Music <br></br> Apple TV+ <br></br> Apple Fitness+ <br></br>{" "}
            Apple News+ <br></br> Apple Arcade <br></br> iCloud <br></br> Apple
            One <br></br> Apple Card <br></br> Apple Books <br></br> Apple
            Podcasts <br></br> App Store
          </p>
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            Account
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Manage Your Apple ID <br></br> Apple Store Account <br></br>
            iCloud.com
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1.6}
          lg={1.6}
          style={{ background: "#F5F5F7" }}
        >
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            Shop and Learn
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Find a Store <br></br> Genius Bar <br></br> Today at Apple <br></br>{" "}
            Apple Camp <br></br> Apple Store App <br></br>
            Refurbished and Clearance <br></br> Financing <br></br> Apple Trade
            In <br></br> Order Status <br></br>
            Shopping Help
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1.6}
          lg={1.6}
          style={{ background: "#F5F5F7" }}
        >
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            For Business
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Apple and Business <br></br> Shop for Business
          </p>
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            For Education
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Apple and Business <br></br> Shop for Business
          </p>
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            For Healthcare
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Apple in Healthcare <br></br> Health on Apple Watch <br></br> Health
            Records on iPhone
          </p>
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            For Government
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Shop for Government <br></br> Shop for Veterans and Military
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={1.6}
          lg={1.6}
          style={{ background: "#F5F5F7" }}
        >
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            Apple values
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Accessibility <br></br> Education <br></br> Environment <br></br>
            Inclusion and Diversity <br></br> Privacy <br></br>
            Racial Equity and Justice <br></br> Supplier Responsibility
          </p>
          <h5
            style={{
              textAlign: "justify",
              fontSize: "17px",
            }}
          >
            About Apple
          </h5>
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            Newsroom <br></br> Apple Leadership <br></br> Career Opportunities{" "}
            <br></br> Investors <br></br> Ethics & Compliance <br></br> Events{" "}
            <br></br> Contact Apple
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          style={{ background: "#F5F5F7" }}
        >
          <p style={{ textAlign: "justify", lineHeight: "30px" }}>
            More ways to shop: Find an Apple Store or other retailer near you.
            Or call 1-800-MY-APPLE.
          </p>
          <hr></hr>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={2}
          style={{ background: "#F5F5F7" }}
        ></Grid>
      </Grid>
    </>
  );
};
export default Home;
