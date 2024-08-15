import React from 'react'
import style from './Admin.module.css'
import Header from '../Header/Header'
function Admin() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <main className={style.main}>
                <h2>
                    Site Administration
                </h2>
                <div className={style.admin_layout}>
                    <div className={style.herobox1}>
                        <div>
                            <div className={style.tag}>
                                <a href="">AUTHENTICATION AND AUTHORIZATION</a>
                            </div>
                            <div className={style.groups}>
                                <div>
                                    <a href="">Groups</a>
                                </div>
                                <div className={style.add_change}>
                                    <a href="">Add</a>
                                    <a href="">Change</a>
                                </div>
                            </div>
                            <div className={style.users}>
                                <div>
                                    <a href="">Users</a>
                                </div>
                                <div className={style.add_change}>
                                    <a href="">Add</a>
                                    <a href="">Change</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.tag}>
                                <a href="">CONTACT</a>
                            </div>
                            <div className={style.contact}>
                                <div><a href="">Contact</a></div>
                                <div className={style.add_change}>
                                    <a href="">Add</a>
                                    <a href="">Change</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.tag}>
                                <a href="">LISTINGS</a>
                            </div>
                            <div className={style.listings}>
                                <div><a href="">Listings</a></div>
                                <div className={style.add_change}>
                                    <a href="">Add</a>
                                    <a href="">Change</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.tag}>
                                <a href="">REALTORS</a>
                            </div>
                            <div className={style.Realtors}>
                                <div><a href="">Realtors</a></div>
                                <div className={style.add_change}>
                                    <a href="">Add</a>
                                    <a href="">Change</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.herobox2}>
                        <h3>Recent action</h3>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Admin
// < main id = "content-start" class="content" tabindex = "-1" >

//         <div id="content" class="colMS">

//             <h1>Site administration</h1>
//             <div id="content-main">
//                 <div class="app-auth module">
//                     <table>
//                         <caption>
//                             <a href="/admin/auth/" class="section" title="Models in the Authentication and Authorization application">Authentication and Authorization</a>
//                         </caption>

//                         <tbody>
//                             <tr class="model-group">
//                                 <th scope="row"><a href="/admin/auth/group/">Groups</a></th>
//                                 <td><a href="/admin/auth/group/add/" class="addlink">Add</a></td>
//                                 <td><a href="/admin/auth/group/" class="changelink">Change</a></td>
//                             </tr>
//                             <tr class="model-user">
//                                 <th scope="row"><a href="/admin/auth/user/">Users</a></th>
//                                 <td><a href="/admin/auth/user/add/" class="addlink">Add</a></td>
//                                 <td><a href="/admin/auth/user/" class="changelink">Change</a></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <div class="app-contact module">
//                     <table>
//                         <caption>
//                             <a href="/admin/contact/" class="section" title="Models in the Contact application">Contact</a>
//                         </caption>
//                         <tbody>
//                             <tr class="model-contact">
//                                 <th scope="row"><a href="/admin/contact/contact/">Contacts</a></th>
//                                 <td><a href="/admin/contact/contact/add/" class="addlink">Add</a></td>
//                                 <td><a href="/admin/contact/contact/" class="changelink">Change</a></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>

//                 <div class="app-listings module">
//                     <table>
//                         <caption>
//                             <a href="/admin/listings/" class="section" title="Models in the Listings application">Listings</a>
//                         </caption>

//                         <tbody>
//                             <tr class="model-listing">
//                                 <th scope="row"><a href="/admin/listings/listing/">Listings</a></th>
//                                 <td><a href="/admin/listings/listing/add/" class="addlink">Add</a></td>
//                                 <td><a href="/admin/listings/listing/" class="changelink">Change</a></td>
//                             </tr>
//                         </tbody></table>
//                 </div>

//                 <div class="app-realtors module">
//                     <table>
//                         <caption>
//                             <a href="/admin/realtors/" class="section" title="Models in the Realtors application">Realtors</a>
//                         </caption>
//                         <tbody>
//                             <tr class="model-realtors">
//                                 <th scope="row"><a href="/admin/realtors/realtors/">Realtorss</a></th>
//                                 <td><a href="/admin/realtors/realtors/add/" class="addlink">Add</a></td>
//                                 <td><a href="/admin/realtors/realtors/" class="changelink">Change</a></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//             <div id="content-related">
//                 <div class="module" id="recent-actions-module">
//                     <h2>Recent actions</h2>
//                     <h3>My actions</h3>
//                     <ul class="actionlist">

//                         <li class="changelink">
//                             <span class="visually-hidden">Changed:</span>
//                             <a href="/admin/realtors/realtors/2/change/">Shola Oretan</a>
//                             <span class="mini quiet">Realtors</span>
//                         </li>
//                         <li class="deletelink">
//                             <span class="visually-hidden">Deleted:</span>
//                             wale
//                             <span class="mini quiet">Contact</span>

//                         </li>
//                         <li class="deletelink">
//                             <span class="visually-hidden">Deleted:</span>
//                             bose
//                             <span class="mini quiet">Contact</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div id="footer"></div>
//     </ >