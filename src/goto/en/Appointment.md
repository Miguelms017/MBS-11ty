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
                    <form name="Appointment" id="appointmentForm">
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
                                <select name="serviceType" id="serviceType" size="1">
                                    <option value="menHaircut">Men Haircut</option>
                                    <option value="womenHaircut">Women Haircut</option>
                                    <option value="color">Color</option>
                                    <option value="Highlights">Highlights</option>
                                    <option value="hairBrushing">Hair Brushing</option>
                                    <option value="waxing">Waxing</option>
                                    <option value="manicure">Manicure</option>
                                    <option value="pedicure">Pedicure</option>
                                </select>
                            </div>
                            <div class="apt__sub__form__cnt__desc">
                                <label for="workDescription">description*</label><br>
                                <textarea name="details" id="workDescription" rows="5" cols="45" required=""></textarea>
                            </div>
                        </div>
                        <div class="apt__sub__form__btn">
                            <input id="submit" class="submit" type="submit" value="submit">
                            <input id="clear" class="clear" type="reset" value="clear">
                        </div>
                        <script>
                            document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
                                e.preventDefault();
                                const data = {
                                    Fname: document.getElementById('FirstName').value,
                                    Lname: document.getElementById('LastName').value,
                                    phone: document.getElementById('Phone').value,
                                    email: document.getElementById('email').value,
                                    date: document.getElementById('Time').value,
                                    service: document.getElementById('serviceType').value,
                                    description: document.getElementById('workDescription').value
                                };
                                try {
                                    const response = await fetch('http://localhost:3000/Appts', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(data)
                                    });
                                    const result = await response.json();
                                    if(result.success){
                                        alert("Appointment created successfully!");
                                        document.getElementById('appointmentForm').reset();
                                    } else {
                                        alert("Error saving appointment.");
                                    }
                                } catch(err){
                                    console.error(err);
                                    alert("Server error.");
                                }
                            });
                        </script>
                    </form>
                </div>
            </div>
        </div>