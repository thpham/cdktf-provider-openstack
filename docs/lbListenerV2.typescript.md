# `lbListenerV2` Submodule <a name="`lbListenerV2` Submodule" id="@ithings/cdktf-provider-openstack.lbListenerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListenerV2 <a name="LbListenerV2" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2 openstack_lb_listener_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

new lbListenerV2.LbListenerV2(scope: Construct, id: string, config: LbListenerV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config">LbListenerV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config">LbListenerV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAllowedCidrs">resetAllowedCidrs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetConnectionLimit">resetConnectionLimit</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultPoolId">resetDefaultPoolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef">resetDefaultTlsContainerRef</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetInsertHeaders">resetInsertHeaders</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetSniContainerRefs">resetSniContainerRefs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutClientData">resetTimeoutClientData</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberConnect">resetTimeoutMemberConnect</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberData">resetTimeoutMemberData</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutTcpInspect">resetTimeoutTcpInspect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts"></a>

```typescript
public putTimeouts(value: LbListenerV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetAllowedCidrs` <a name="resetAllowedCidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetAllowedCidrs"></a>

```typescript
public resetAllowedCidrs(): void
```

##### `resetConnectionLimit` <a name="resetConnectionLimit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetConnectionLimit"></a>

```typescript
public resetConnectionLimit(): void
```

##### `resetDefaultPoolId` <a name="resetDefaultPoolId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultPoolId"></a>

```typescript
public resetDefaultPoolId(): void
```

##### `resetDefaultTlsContainerRef` <a name="resetDefaultTlsContainerRef" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDefaultTlsContainerRef"></a>

```typescript
public resetDefaultTlsContainerRef(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsertHeaders` <a name="resetInsertHeaders" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetInsertHeaders"></a>

```typescript
public resetInsertHeaders(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSniContainerRefs` <a name="resetSniContainerRefs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetSniContainerRefs"></a>

```typescript
public resetSniContainerRefs(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeoutClientData` <a name="resetTimeoutClientData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutClientData"></a>

```typescript
public resetTimeoutClientData(): void
```

##### `resetTimeoutMemberConnect` <a name="resetTimeoutMemberConnect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberConnect"></a>

```typescript
public resetTimeoutMemberConnect(): void
```

##### `resetTimeoutMemberData` <a name="resetTimeoutMemberData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutMemberData"></a>

```typescript
public resetTimeoutMemberData(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutTcpInspect` <a name="resetTimeoutTcpInspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.resetTimeoutTcpInspect"></a>

```typescript
public resetTimeoutTcpInspect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

lbListenerV2.LbListenerV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

lbListenerV2.LbListenerV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

lbListenerV2.LbListenerV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

lbListenerV2.LbListenerV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbListenerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbListenerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbListenerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbListenerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrsInput">allowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolIdInput">defaultPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput">defaultTlsContainerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeadersInput">insertHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPortInput">protocolPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefsInput">sniContainerRefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientDataInput">timeoutClientDataInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnectInput">timeoutMemberConnectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberDataInput">timeoutMemberDataInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspectInput">timeoutTcpInspectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrs">allowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolId">defaultPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeaders">insertHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPort">protocolPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefs">sniContainerRefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientData">timeoutClientData</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnect">timeoutMemberConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberData">timeoutMemberData</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspect">timeoutTcpInspect</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeouts"></a>

```typescript
public readonly timeouts: LbListenerV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference">LbListenerV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedCidrsInput`<sup>Optional</sup> <a name="allowedCidrsInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrsInput"></a>

```typescript
public readonly allowedCidrsInput: string[];
```

- *Type:* string[]

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `defaultPoolIdInput`<sup>Optional</sup> <a name="defaultPoolIdInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolIdInput"></a>

```typescript
public readonly defaultPoolIdInput: string;
```

- *Type:* string

---

##### `defaultTlsContainerRefInput`<sup>Optional</sup> <a name="defaultTlsContainerRefInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRefInput"></a>

```typescript
public readonly defaultTlsContainerRefInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insertHeadersInput`<sup>Optional</sup> <a name="insertHeadersInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeadersInput"></a>

```typescript
public readonly insertHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerIdInput"></a>

```typescript
public readonly loadbalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPortInput"></a>

```typescript
public readonly protocolPortInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sniContainerRefsInput`<sup>Optional</sup> <a name="sniContainerRefsInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefsInput"></a>

```typescript
public readonly sniContainerRefsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutClientDataInput`<sup>Optional</sup> <a name="timeoutClientDataInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientDataInput"></a>

```typescript
public readonly timeoutClientDataInput: number;
```

- *Type:* number

---

##### `timeoutMemberConnectInput`<sup>Optional</sup> <a name="timeoutMemberConnectInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnectInput"></a>

```typescript
public readonly timeoutMemberConnectInput: number;
```

- *Type:* number

---

##### `timeoutMemberDataInput`<sup>Optional</sup> <a name="timeoutMemberDataInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberDataInput"></a>

```typescript
public readonly timeoutMemberDataInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LbListenerV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---

##### `timeoutTcpInspectInput`<sup>Optional</sup> <a name="timeoutTcpInspectInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspectInput"></a>

```typescript
public readonly timeoutTcpInspectInput: number;
```

- *Type:* number

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedCidrs`<sup>Required</sup> <a name="allowedCidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.allowedCidrs"></a>

```typescript
public readonly allowedCidrs: string[];
```

- *Type:* string[]

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `defaultPoolId`<sup>Required</sup> <a name="defaultPoolId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultPoolId"></a>

```typescript
public readonly defaultPoolId: string;
```

- *Type:* string

---

##### `defaultTlsContainerRef`<sup>Required</sup> <a name="defaultTlsContainerRef" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.defaultTlsContainerRef"></a>

```typescript
public readonly defaultTlsContainerRef: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insertHeaders`<sup>Required</sup> <a name="insertHeaders" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.insertHeaders"></a>

```typescript
public readonly insertHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sniContainerRefs`<sup>Required</sup> <a name="sniContainerRefs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.sniContainerRefs"></a>

```typescript
public readonly sniContainerRefs: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeoutClientData`<sup>Required</sup> <a name="timeoutClientData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutClientData"></a>

```typescript
public readonly timeoutClientData: number;
```

- *Type:* number

---

##### `timeoutMemberConnect`<sup>Required</sup> <a name="timeoutMemberConnect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberConnect"></a>

```typescript
public readonly timeoutMemberConnect: number;
```

- *Type:* number

---

##### `timeoutMemberData`<sup>Required</sup> <a name="timeoutMemberData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutMemberData"></a>

```typescript
public readonly timeoutMemberData: number;
```

- *Type:* number

---

##### `timeoutTcpInspect`<sup>Required</sup> <a name="timeoutTcpInspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.timeoutTcpInspect"></a>

```typescript
public readonly timeoutTcpInspect: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerV2Config <a name="LbListenerV2Config" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.Initializer"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

const lbListenerV2Config: lbListenerV2.LbListenerV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.loadbalancerId">loadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocolPort">protocolPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.allowedCidrs">allowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultPoolId">defaultPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef">defaultTlsContainerRef</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.insertHeaders">insertHeaders</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.sniContainerRefs">sniContainerRefs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutClientData">timeoutClientData</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberConnect">timeoutMemberConnect</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberData">timeoutMemberData</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutTcpInspect">timeoutTcpInspect</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.loadbalancerId"></a>

```typescript
public readonly loadbalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#loadbalancer_id LbListenerV2#loadbalancer_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol LbListenerV2#protocol}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.protocolPort"></a>

```typescript
public readonly protocolPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#protocol_port LbListenerV2#protocol_port}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#admin_state_up LbListenerV2#admin_state_up}.

---

##### `allowedCidrs`<sup>Optional</sup> <a name="allowedCidrs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.allowedCidrs"></a>

```typescript
public readonly allowedCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#allowed_cidrs LbListenerV2#allowed_cidrs}.

---

##### `connectionLimit`<sup>Optional</sup> <a name="connectionLimit" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#connection_limit LbListenerV2#connection_limit}.

---

##### `defaultPoolId`<sup>Optional</sup> <a name="defaultPoolId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultPoolId"></a>

```typescript
public readonly defaultPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_pool_id LbListenerV2#default_pool_id}.

---

##### `defaultTlsContainerRef`<sup>Optional</sup> <a name="defaultTlsContainerRef" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.defaultTlsContainerRef"></a>

```typescript
public readonly defaultTlsContainerRef: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#default_tls_container_ref LbListenerV2#default_tls_container_ref}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#description LbListenerV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#id LbListenerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insertHeaders`<sup>Optional</sup> <a name="insertHeaders" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.insertHeaders"></a>

```typescript
public readonly insertHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#insert_headers LbListenerV2#insert_headers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#name LbListenerV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#region LbListenerV2#region}.

---

##### `sniContainerRefs`<sup>Optional</sup> <a name="sniContainerRefs" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.sniContainerRefs"></a>

```typescript
public readonly sniContainerRefs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#sni_container_refs LbListenerV2#sni_container_refs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tags LbListenerV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#tenant_id LbListenerV2#tenant_id}.

---

##### `timeoutClientData`<sup>Optional</sup> <a name="timeoutClientData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutClientData"></a>

```typescript
public readonly timeoutClientData: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_client_data LbListenerV2#timeout_client_data}.

---

##### `timeoutMemberConnect`<sup>Optional</sup> <a name="timeoutMemberConnect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberConnect"></a>

```typescript
public readonly timeoutMemberConnect: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_connect LbListenerV2#timeout_member_connect}.

---

##### `timeoutMemberData`<sup>Optional</sup> <a name="timeoutMemberData" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutMemberData"></a>

```typescript
public readonly timeoutMemberData: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_member_data LbListenerV2#timeout_member_data}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: LbListenerV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeouts LbListenerV2#timeouts}

---

##### `timeoutTcpInspect`<sup>Optional</sup> <a name="timeoutTcpInspect" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Config.property.timeoutTcpInspect"></a>

```typescript
public readonly timeoutTcpInspect: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#timeout_tcp_inspect LbListenerV2#timeout_tcp_inspect}.

---

### LbListenerV2Timeouts <a name="LbListenerV2Timeouts" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.Initializer"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

const lbListenerV2Timeouts: lbListenerV2.LbListenerV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#create LbListenerV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#delete LbListenerV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#update LbListenerV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#create LbListenerV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#delete LbListenerV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/lb_listener_v2#update LbListenerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerV2TimeoutsOutputReference <a name="LbListenerV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { lbListenerV2 } from '@ithings/cdktf-provider-openstack'

new lbListenerV2.LbListenerV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LbListenerV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.lbListenerV2.LbListenerV2Timeouts">LbListenerV2Timeouts</a>

---



