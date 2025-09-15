---
title: Appointments
layout: 'baseAlt.njk'
---
<div class="apt">
            <div class="apt__title">
                <h2>Appointments</h2>
            </div>
            <div class="apt__sub">
                <div class="apt__sub__hero">
                    <div class="apt__sub__hero__img">
                        <img src="https://res.cloudinary.com/dvoigkose/image/upload/f_auto,q_auto,w_300/v1/Personal/b0bis5b8mxu3fffugjyx" srcset="https://res.cloudinary.com/dvoigkose/image/upload/f_auto,q_auto,w_300/v1/Personal/b0bis5b8mxu3fffugjyx 300w, https://res.cloudinary.com/dvoigkose/image/upload/f_auto,q_auto,w_600/v1/Personal/b0bis5b8mxu3fffugjyx 600w, https://res.cloudinary.com/dvoigkose/image/upload/f_auto,q_auto,w_1200/v1/Personal/b0bis5b8mxu3fffugjyx 1200w" alt="calendar" width="1280" height="720">
                    </div>
                    <div class="apt__sub__hero__txt">
                        <p>Welcome to the appointment section. In here you can book an appointment with us. To create one, You need to enter your name, phone number, email and the description of the service you want</p>
                        <br>
                        <p>Thanks for trust in us!!</p>
                    </div>
                </div>
                <div class="apt__sub__form">
                    <form name="Appointment" method="post">
                        <div class="apt__sub__form__cnt">
                            <div class="apt__sub__form__cnt__input">
                                <label for="FirstName">First Name*</label>
                                <input type="text" name="FirstName" id="FirstName" placeholder="First Name" required="">
                            </div>
                            <div class="apt__sub__form__cnt__input">
                                <label for="LastName">Last Name*</label>
                                <input type="text" name="LastName" id="LastName" placeholder="Last Name" required="">
                            </div>
                            <div class="apt__sub__form__cnt__input">
                                <label for="Phone">Phone</label>
                                <input type="tel" name="Phone" id="Phone" placeholder="Phone Number" required="">
                            </div>
                            <div class="apt__sub__form__cnt__input">
                                <label for="email">Email*</label>
                                <input type="email" name="email" id="email" placeholder="email" required="">
                            </div>
                            <div class="apt__sub__form__cnt__input">
                                <label for="Time">Date and Time</label>
                                <input type="datetime-local" name="Date" id="Time" required="">
                            </div>
                            <div class="apt__sub__form__cnt__input">
                                <label for="serviceType">Service Type*</label>
                                <select name="serviceType" size="1">
                                    <option value="menHaircut">Men Haircut</option>
                                    <option value="womenHaircut">Women Haircut</option>
                                    <option value="color">Color</option>
                                    <option value="Highlights">Highlights</option>
                                    <option value="hairBrushing">Hair Brushing</option>
                                    <option value="waxing">Waxing</option><option>
                                    </option><option value="manicure">Manicure</option>
                                    <option value="pedicure">Pedicure</option>
                                </select>
                            </div>
                            <div class="apt__sub__form__cnt__desc">
                                <label for="workDescription">description*</label><br>
                                <textarea id="workDescription" rows="5" cols="45" required=""></textarea>
                            </div>
                        </div>
                        <div class="apt__sub__form__btn">
                            <input id="submit" class="submit" type="submit" value="submit">
                            <input id="clear" class="clear" type="reset" value="clear">
                        </div>
                    </form>
                </div>
            </div>
        </div>